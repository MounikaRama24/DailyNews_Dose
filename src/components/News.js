import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import CountryDropdown from './CountryDropdown';
import SearchBar from './SearchBar';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(props.country);
  const [searchTerm, setSearchTerm] = useState('');
  const [languageCode, setLanguageCode] = useState('en'); // Default language is English

  const categoryBadgeColors = {
    sports: "bg-warning",
    technology: "bg-dark",
    entertainment: "bg-success",
    science: "bg-info",
    health: "bg-danger",
    general: "bg-primary",
    business: "bg-primary",
    // Add more categories and colors as needed
  };

  // Define language options
  const languageOptions = [
    { code: 'ar', label: 'Arabic' },
  { code: 'bn', label: 'Bengali' },
  { code: 'zh', label: 'Chinese' },
  { code: 'cs', label: 'Czech' },
  { code: 'da', label: 'Danish' },
  { code: 'nl', label: 'Dutch' },
  { code: 'en', label: 'English' },
  { code: 'fi', label: 'Finnish' },
  { code: 'fr', label: 'French' },
  { code: 'de', label: 'German' },
  { code: 'el', label: 'Greek' },
  { code: 'he', label: 'Hebrew' },
  { code: 'hi', label: 'Hindi' },
  { code: 'hu', label: 'Hungarian' },
  { code: 'id', label: 'Indonesian' },
  { code: 'it', label: 'Italian' },
  { code: 'ja', label: 'Japanese' },
  { code: 'ko', label: 'Korean' },
  { code: 'ms', label: 'Malay' },
  { code: 'no', label: 'Norwegian' },
  { code: 'fa', label: 'Persian' },
  { code: 'pl', label: 'Polish' },
  { code: 'pt', label: 'Portuguese' },
  { code: 'ro', label: 'Romanian' },
  { code: 'ru', label: 'Russian' },
  { code: 'es', label: 'Spanish' },
  { code: 'sv', label: 'Swedish' },
  { code: 'th', label: 'Thai' },
  { code: 'tr', label: 'Turkish' },
  { code: 'uk', label: 'Ukrainian' },
  { code: 'ur', label: 'Urdu' },
  { code: 'vi', label: 'Vietnamese' },
  ];

  useEffect(() => {
    document.title = `DailyNewsDose ${capitalizeFirstLetter(props.category)} Top Headlines`;
    updateNews();
    // eslint-disable-next-line
  }, [selectedCountry, props.category, searchTerm, languageCode]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguageCode(selectedLanguage);
  };

  const updateNews = async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?language=${languageCode}&country=${selectedCountry}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}&q=${searchTerm}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };
  
  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?language=${languageCode}&country=${selectedCountry}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}&q=${searchTerm}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
  };
  const badgeColor = categoryBadgeColors[props.category] || "bg-primary";

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ marginTop: '100px' }}>
        DailyNewsDose {capitalizeFirstLetter(props.category)} Top Headlines
      </h1>
      <SearchBar onSearch={setSearchTerm} />
      <CountryDropdown 
        mode={props.mode}
        togglemode={props.togglemode}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <select value={languageCode} onChange={handleLanguageChange}>
        {languageOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.label}
          </option>
        ))}
      </select>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => (
              <div className="col-md-4" key={element.url + index}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ' '}
                  description={element.description ? element.description.slice(0, 70) : ' '}
                  imageUrl={element.urlToImage}
                  url={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                  badgeColor={badgeColor}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string,
  mode: PropTypes.string,
  togglemode: PropTypes.func,
};

News.defaultProps = {
  country: 'us',
  pageSize: 10,
};

export default News;

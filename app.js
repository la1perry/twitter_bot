

const Twitter = require ('twitter');
const Tweet = new Twitter ({
    consumer_key: 'PaNeqd4AFUv9OnWtMtatTwEPn',
    consumer_secret: 'qEiAwmwCERPeRsp193Q21TFfXj2FoKYK1EK26Jz3g86BiUH2Xu',
    access_token: '3037116397-GD7fJwoPIH24ntZ6PqV8pWxQa2vSm2x4mLcvkt0',
    access_token_secret: 'Re1p554NlBcw1GiFofqLbGuiTxcIMtgfQPdlgE1a2ikVk'
});




Tweet.get ('statuses/user_timeline', {screen_name:"kupakombucha"}, function (err, tweets, response){
    if(!err) {
    console.log(tweets);
}
});

// const url = 'https://api.twitter.com/1.1/search/tweets.json?q=';
// const consumer_key= 'PaNeqd4AFUv9OnWtMtatTwEPn';
//     const consumer_secret= 'qEiAwmwCERPeRsp193Q21TFfXj2FoKYK1EK26Jz3g86BiUH2Xu';
//   const access_token= '3037116397-GD7fJwoPIH24ntZ6PqV8pWxQa2vSm2x4mLcvkt0';
//  const access_token_secret= 'Re1p554NlBcw1GiFofqLbGuiTxcIMtgfQPdlgE1a2ikVk';
//  const query='trump';
 
//  fetch (`${url}&${query}&${consumer_key}&${consumer_secret}&${access_token}&${access_token_secret}`)
//   .then((res) => res.json())
//     .then((data) => {     
//         console.log(data);
       
//     })
// .catch((e) => {
//     console.log(e,"error");
//     alert('We could the tweets you requested');
// });

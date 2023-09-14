const userDetailsConfig = {
    "api": {
        "uri": `https://twitter154.p.rapidapi.com/user/details?username=`,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "648ff908f0mshaa4164b4a88da32p132985jsn7c9aa7c716e9",
            "X-RapidAPI-Host": "twitter154.p.rapidapi.com"
        }
    }
}

async function getUserDetails(username) {
    const url = `${userDetailsConfig.api.uri}${username}`;
    console.log(url);
    
    const options = {
        method: userDetailsConfig.api.method,
    headers: userDetailsConfig.api.headers};
    
    const response = await fetch(url, options);
    return addClientGeneratedProperties(await response.json());
   };
   
   function addClientGeneratedProperties(data){
        data.twitter_link = `https://twitter.com/${data.username}`;
        return data;
   }
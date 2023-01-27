const $gifArea = $("#gifArea");
const $searchTerm = $("#searchTerm");
//Request gif from GIPHY API using axios 
$("form").on("submit", async function (e){
    e.preventDefault();

    let searchTerm = $searchTerm.val();

    const res = await axios.get('https://api.giphy.com/v1/gifs/search', 
    {params: {
        q: searchTerm,
        api_key: "q2Hwo90mipJvJSGm9VTXqCKcSLWIKcoa"
    }});
    addGif(res.data);
})
//Add gif retrieved from API
function addGif(res){
    let numResults = res.data.length;
    //randomize which gif will appear using math.random by randomizing result data
    if (numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        //append new gif to the gifArea
        let $newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url,
        });
        $gifArea.append($newGif);
    } 
}
//Remove gifs in gifArea
$("#remove").on("click",function(e){
    e.preventDefault()
    $gifArea.empty();
});


console.log("Let's get this party started!");

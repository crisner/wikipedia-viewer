
    
    // $("#submit").on("click", function(e) {
    //     searchUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&list=backlinks&titles=" + searchText + "&rvprop=content&rvlimit=max&bltitle=" + searchText + "&bllimit=10";
        
    //     // $("#search").attr("action","$.getJSON(searchUrl, displayResults)");
    //     // $("main").html(json.limits.revisions);
    //     // console.log(searchText, searchUrl);
    //     // event.preventDefault();
    // });
    
    function displayResults() { 
        var searchText = "";
        var searchUrl;
        var results;
        $("#search").on("change", function() {
            searchText = this.value;
            searchUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=revisions&list=backlinks&titles=" + searchText + "&rvprop=content&rvlimit=max&bltitle=" + searchText + "&bllimit=10";
            // console.log(searchText, searchUrl);
        });
        
        $("#submit").on("click", function(e) {
            $.getJSON(searchUrl, getResults);
            // console.log("link",searchText, searchUrl);
            event.preventDefault();
        });
    }

    function getResults(json) {
        var link = "<ul>";
        
           var links = json.query.backlinks;
        links.forEach(function(val) {
            link += "<li>" + val.title + "</li>";

        });
        // link = json.backlinks[0];
        link += "</ul>"
            console.log(link);
            $("main").html(link);
        
        
    }
displayResults();

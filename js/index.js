    function displayResults() { 
        var searchText = "";
        var searchUrl;
        var results;
        $("#search").on("change", function() {
            searchText = this.value;
            searchUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + searchText + "&limit=max&profile=fuzzy";
        });
        
        $("#submit").on("click", function(e) {
            $.getJSON(searchUrl, getResults);
            event.preventDefault();
        });

        $("#random").on("click", function(e) {
            window.open("https://en.wikipedia.org/wiki/Special:Random");
        });

        // $(window).on("scroll", function(e) {
        //     $.getJSON(searchUrl, loadMore);
        //     // event.preventDefault();
        // });
    }

    function getResults(json) {
        var links = json;
        var title = json[1];
        // var length = title.length;
        var length = 10;
        var description = json[2];
        var url = json[3];
        var link = "<ul>";

        for (var i = 0; i < length; i++) {
            link += "<li><a target='_blank' href='" + url[i] + "'>" + title[i] + "</a><p>" + description[i] + "</p></li>"
        };
        // if ($(window).scrollTop() + $(window).height() > $("main").height()) {
        //     for (var i = ; i < length; i++) {
        //         link += "<li><a target='_blank' href='" + url[i] + "'>" + title[i] + "</a><p>" + description[i] + "</p></li>"
        //     }
        //     $("main").append(link); 
        //   }
        
        link += "</ul>";
            
        $("main").html(link);
        // .show("slow", function() {
        //     return length < 5;
        // });    
    }

    // function loadMore(json) {
    //     var links = json;
    //     var title = json[1];
    //     // var length = title.length;
    //     var length = 10;
    //     var description = json[2];
    //     var url = json[3];
    //     var link = "<ul>";

    //     if ($(window).scrollTop() + $(window).height() > $("main").height()) {
    //         for (var i = ; i < length; i++) {
    //             link += "<li><a target='_blank' href='" + url[i] + "'>" + title[i] + "</a><p>" + description[i] + "</p></li>"
    //         }
    //         $("main").append(link); 
    //       }
        
    //     link += "</ul>";
            
         
        
    // }

displayResults();

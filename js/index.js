    function displayResults() { 
        var searchText = "";
        var searchUrl;
        var results;
        // Animate placeholder text depending on the state of the input field
        var timer;
        $("#search").on("mousedown", function() {
            $("#search").attr("placeholder", "");
        }).on("mouseout", function() {
            timer = setTimeout(function() {
                $("#search").attr("placeholder", "Search wiki");
            },1500);            
        });
        clearTimeout(timer);

        // Get search term
        $("#search").on("change", function() {
            searchText = this.value;
            searchUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + searchText + "&limit=10&profile=fuzzy";
        });

        // Retrieve data and alter appearance on clicking the submit button 
        $("#submit").on("click", function(e) {
            $("#search").addClass("size");
            $("header").addClass("move");
            $("#refresh").addClass("reset");
            $("footer").removeClass("bottom");
            $("#random").removeClass("randomsize");
            $("main").addClass("visibility");
            $("body").addClass("change");
            $("footer").css("color", "#BDBDBD");
            
            $.getJSON(searchUrl, getResults);
            event.preventDefault();
        });

        // Go back to the homepage
        $("#refresh").on("click", function() {
            $("#search").val("").removeClass("size");
            $("header").removeClass("move");
            $("#refresh").removeClass("reset");
            $("footer").addClass("bottom").css("color", "#757575");
            $("#random").addClass("randomsize");
            $("main").removeClass("visibility");
            $("body").removeClass("change");
        });
        
        // Get random article
        $("#random").on("click", function(e) {
            window.open("https://en.wikipedia.org/wiki/Special:Random");
        });

    }

    // Populate results
    function getResults(json) {
        var links = json;
        var title = json[1];
        // var length = title.length;
        var length = 10;
        var description = json[2];
        var url = json[3];
        var link = "<ul>";

        for (var i = 0; i < length; i++) {
            link += "<a target='_blank' href='" + url[i] + "'><li><h4>" + title[i] + "</h4><p>" + description[i] + "</p></li></a>"
        };
        
        link += "</ul>";
            
        $("main").html(link); 
        $("li").animateCss("animated slideInRight");
    }

    // Required function for animate.css
    $.fn.extend({
        animateCss: function(animationName, callback) {
          var animationEnd = (function(el) {
            var animations = {
              animation: 'animationend',
              OAnimation: 'oAnimationEnd',
              MozAnimation: 'mozAnimationEnd',
              WebkitAnimation: 'webkitAnimationEnd',
            };
      
            for (var t in animations) {
              if (el.style[t] !== undefined) {
                return animations[t];
              }
            }
          })(document.createElement('div'));
      
          this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
      
            if (typeof callback === 'function') callback();
          });
      
          return this;
        },
      });

displayResults();

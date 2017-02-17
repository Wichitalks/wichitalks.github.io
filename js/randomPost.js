function generateRandomPosts()
{
    $.getJSON("/search.json", function(data) {
        console.log("[search.json loaded for random posts]");

        var postsCount = data.length;
        var posts = data;

        var randomIndexUsed = [];
        var counter = 0;
        var numberOfPosts = 4;

        var divRandomPosts = $("#random_posts");

        while (counter < numberOfPosts)
        {
            var randomIndex = Math.floor(Math.random() * postsCount);

            if (randomIndexUsed.indexOf(randomIndex) == "-1")
            {
                var postHREF = posts[randomIndex].href;
                var postTitle = posts[randomIndex].title;
                var postImage = posts[randomIndex].img;
                var postSpeaker = posts[randomIndex].speaker;

                if (counter == 3) {
                   divRandomPosts.append('<div class="col-lg-4 col-sm-6 hide_on_large_screen" style="padding: 5px;"><a href="' + postHREF + '" class="portfolio-box"><img src="' + postImage + '" class="img-responsive" alt=""><div class="portfolio-box-caption"><div class="portfolio-box-caption-content"><div class="project-category text-faded">' + postSpeaker + '<br>on</div><div class="project-name">' + postTitle + '</div></div></div></a></div>');
                } else {
                    divRandomPosts.append('<div class="col-lg-4 col-sm-6" style="padding: 5px;"><a href="' + postHREF + '" class="portfolio-box"><img src="' + postImage + '" class="img-responsive" alt=""><div class="portfolio-box-caption"><div class="portfolio-box-caption-content"><div class="project-category text-faded">' + postSpeaker + '<br>on</div><div class="project-name">' + postTitle + '</div></div></div></a></div>');
                }

                randomIndexUsed.push(randomIndex);

                counter++;
            }
        }
    });
}

$(document).ready(function() {
    generateRandomPosts();
});
import React from "react";

const TwitchPlayer = () => {
    return (
        <div>
            <!-- Add a placeholder for the Twitch embed -->
            <div id="twitch-embed"></div>

            <!-- Load the Twitch embed JavaScript file -->
            <script src="https://embed.twitch.tv/embed/v1.js"></script>

            <script type="text/javascript">
            new Twitch.Embed("twitch-embed", {
                width: 854,
                height: 480,
                channel: "emokitten_xoxo",
                // Only needed if this page is going to be embedded on other websites
                parent: ["emokittenxo.com"]
            });
            </script>
        </div>
    );
};

export default TwitchPlayer;
class DiscordExtra {
    
    randomInterval(interval, min, max) {
        let timeout;

        const runInterval = () => {
            const timeoutFunction = () => {
                interval();
                runInterval();
            };

            const delay = Math.floor(Math.random() * (max - min + 1)) + min;

            timeout = setTimeout(timeoutFunction, delay);
        };

        runInterval();

        return {
            clear() {
                clearTimeout(timeout)
            }
        };
    };
};

module.exports = DiscordExtra;

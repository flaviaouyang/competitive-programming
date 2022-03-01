const countdown = (i) => {
    if (i === 0) {
        console.log(0);
        return 0;
    }
    console.log(i);
    countdown(i-1);
};

countdown(5);
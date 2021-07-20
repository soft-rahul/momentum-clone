function quotes() {




    let myQuotes = [`when you have a dream , you've got to grab it and never let go.`,
        `Nothing is impossible.The word itself says I'm possible !`,
        `There is nothing impossible to they who will try `,
        ` The bad news is time flies. The good news is you're the pilot `,
        `Spread love everywhere you go. `,
        `Belief creats the actual fact`,
        `The Man who has confidence in himself gains the confidence of others.`,
        `What the mind can conceive and believe , it can achieve.`,
        `Live as if you were to die tomorrow. Learn as if you were to live forever.`,
        `We become what we think most of the time, and that's the strangest secret.`,
        `The best revenge is massive success ! .`,
        `Patience, persistence, and perspiration make an unbeatable combination for success.`,
        `Poor people have big TVs. Rich people have a big library.`,
        ` Don’t let the fear of losing be greater than the excitement of winning.`,
        `If you want to be successful, find someone who has achieved the results you want and copy what they do and you’ll achieve the same results. `,
        `Someone is sitting in the shade today because someone planted a tree a long time ago.`,
        `Make each day your masterpiece. `,
        ` Doing the best at this moment puts you in the best place for the next moment.`,
        `A goal is a dream with a deadline.`,
        `You’ll never change your life until you change something you do daily. The secret of your success is found in your daily routine`,
        `A strong, positive self-image is the best possible preparation for success.`,
        `Do one thing every day that scares you.`,
        `Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential.`,
        `It does not matter how slowly you go, so long as you do not stop.`,
        `Great minds discuss ideas. Average minds discuss events. Small minds discuss people. `,
        `Don’t compare yourself with anyone in this world… if you do so, you are insulting yourself `,
        `Small daily improvements are the key to staggering long term results`,
        `Motivation is what gets you started. Habit is what keeps you going – Jim Rohn`,
        `Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success." --Swami Vivekananda`,


    ];

    let h2 = document.querySelector('.q');
    h2.textContent = myQuotes[Math.floor(Math.random() * myQuotes.length)];


}
setInterval(quotes, 60 * 1000);
// Time 
function clock() {
    const h1 = document.querySelector('h1');
    const clock = new Date();
    let hour = clock.getHours();
    let minute = clock.getMinutes();
    if (minute < 10) {
        minute = `0${minute}`;
    }
    if (hour < 10) {
        hour = `0${hour}`;
    }
    h1.textContent = ` ${hour}:${minute} `;

}

setInterval(clock, 1000);


// greeting user 
function greet() {
    const USERNAME = 'Rahul Keshri';
    const h2 = document.querySelector('.greet');

    let date = new Date();
    let hour = date.getHours();



    if (hour >= 4 && hour < 12) {
        h2.textContent = `Good Morning, ${USERNAME}`;

    } else if (hour >= 12 && hour <= 16) {
        h2.textContent = `Good Afternoon, ${USERNAME}`;

    } else if (hour >= 16 || hour < 4) {
        h2.textContent = `Good Evening, ${USERNAME}`;

    }
}
   
setInterval(greet,1000);

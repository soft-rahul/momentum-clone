function quotes() {




    let myQuotes = [
        `when you have a dream , you've got to grab it and never let go.`,
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
        `I am capable . I am Strong. I Believe in Myself `,
        `There's Plenty of Time to Rest When You're dead .`,
        `You do not find the happy life. You make it.`,
        `No pressure, No Diamonds`,
        `Stay hungry,Stay foolish`,
        `Eat,Sleep,Code,Repeat;`,
        `Every Moment is a fresh beginning `,
        `Try Again,Fail again,Fail Better.`,
        `You never fail until you stop trying...`,
        `Dream Big, stay positive, work hard, and enjoy the journey..`,
        `Enjoy the little things, for one day you may look back and realize they were the big things...`,
        `If beautiful lilies bloom in ugly waters, you too can blossom in ugly situations ..`,
        `I may stumble. I may fail. I may cry.But I'll NEVER give up! Tomorrow, I rise again.`,
        `EveryThing you can imagine is real..`,
        `We are all in the gutter , but some of us are looking at the stars..`,
        `Mostly, the world sees you the way you see yourself..`,
        `There is no substitute for hard work ...`,

        'You get what you focus on.',
        'Love for all , Hatred for none.... ',
        'What we think, we become....',
        'I\'m doing this for me.',
        'Yesterday You said Tomorrow..',
        'Don\'t wish for it , work for it...',
        'One Year equals 365 possibilites..',
        'Work Harder',
        `जीवन की सबसे बड़ी ख़ुशी,
        उस काम को करने में हैं,
        जिसे लोग कहते हैं.
        “तुम नहीं कर सकते”`,
        `I find that the harder I work, the more luck I seem to have.`


    ];

    let h2 = document.querySelector('.q');
    h2.textContent = myQuotes[Math.floor(Math.random() * myQuotes.length)];


}
setInterval(quotes, 20 * 1000);


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
    let sec = date.getSeconds();


        if (hour >= 4 && hour < 12) {
            h2.textContent = `Good Morning, ${USERNAME}`;

        } else if (hour >= 12 && hour <= 16) {
            h2.textContent = `Good Afternoon, ${USERNAME}`;

        } else if (hour >= 16 || hour < 4) {
            h2.textContent = `Good Evening, ${USERNAME}`;

        }


    
}

setInterval(greet, 1000);

// adding new feature
function changeBg() {
    const mainElement = document.querySelector('#main');
    mainElement.style.backgroundImage = `url(Multimedia/p${Math.floor(Math.random() * 25)}.jpg)`;

}

setInterval(changeBg, 60 * 1000)

// live
function bigHeart(){
    const h = document.querySelector('.live');
    h.style.cssText = "font-size:120%";
}
function smallHeart(){
    const h2 = document.querySelector('.live');
    h2.style.cssText = "font-size:100%";
}

setInterval(bigHeart,1000);
setTimeout(smallHeart,2000);
import React from 'react';
import abtStyle from '../styles/About.module.css';

const about = () => {
  return (
    <div className={abtStyle.container}>
      <h1>Hey I&apos;m Alex</h1>
      <p>I&apos;m a nerdy web developer and artist from Brooklyn, New York</p>
      <p>
        I started this blog for my friends to use as an alternative to
        Instagram, so we can share ideas, thoughts, photos, research, or
        anything else without it disappearing within an Instagram Story or text
        message conversations.
      </p>
      <p>
        I&apos;m just gonna keep this about page old-school html for now because
        it feels comfy and the real app is on the other page. Chances are
        you&apos;re here to read about specs on how this was made or something!
      </p>
      <p>
        I made this app using Next.js and Ghost CMS, making this my first
        Jamstack app. I gotta say - it&apos;s so much more fun and easy than I
        thought it would be.
      </p>
      <p>
        The hardest thing though, and the thing I really am trying to fix in
        real time as you may see, is styling Next.js Image components. THEY JUST
        WON&apos;T BUDGE! My artist heart cries.
      </p>
      <p>
        Nevertheless, if you&apos;d like to see my code for the site{' '}
        <a
          style={{ color: 'blue' }}
          rel='noreferrer'
          target='_blank'
          href='https://github.com/lapsangsouchy/social-asides-official'
        >
          Click Here For My Github Repo
        </a>
        !
      </p>
      <p>
        I might explain the process for anyone wishing to use the same stack to
        build their own website, but for now I think I&apos;ll stick to styling
        this place up, adding some cool new features, and writing my thoughts
        and ideas down 🥰
      </p>
    </div>
  );
};

export default about;

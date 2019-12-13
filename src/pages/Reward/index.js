import React from 'react';
import RewardCard from './RewardCard';
const Reward = () => {
  return (
    <>
      <div className='main-header reward-header'>
        <div className='content-bg-wrap bg-rewards'></div>
        <div className='bg-rewards-inner'>
          <div className='container'>
            <div className='row'>
              <div className='col col-lg-6 col-md-8 col-sm-12 col-12'>
                <div className='rewards-content'>
                  <h1>rewards</h1>
                  <p>
                    You will be rewarded for doing what you love to do; sharing
                    your favorite avocado shots, indulging in a scrumptious
                    avocado dish, and collecting the most useful avocado health
                    and wellness tips so you can live your best life ever! Learn
                    more about our rewards system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
            <div className='point-wrap'>
              <ul>
                <li>your points</li>
                <li>5,000</li>
              </ul>
            </div>
            <div className='point-system'>
              <h3>points system</h3>
              <p>
                Here is a breakdown of which actions acquires points and how
                much each action is worth.
              </p>
              <div className='row point-row'>
                <RewardCard />
                <RewardCard />
                <RewardCard />
                <RewardCard />
              </div>
              <h3>points system</h3>
              <p>
                Here is a breakdown of which actions acquires points and how
                much each action is worth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reward;

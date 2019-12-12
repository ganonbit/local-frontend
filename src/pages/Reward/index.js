import React from 'react';
import RewardCard from './RewardCard';
const Reward = () => {
  return (
    <>
      <div class='main-header reward-header'>
        <div class='content-bg-wrap bg-rewards'></div>
        <div class='bg-rewards-inner'>
          <div class='container'>
            <div class='row'>
              <div class='col col-lg-6 col-md-8 col-sm-12 col-12'>
                <div class='rewards-content'>
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

      <div class='container'>
        <div class='row'>
          <div class='col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
            <div class='point-wrap'>
              <ul>
                <li>your points</li>
                <li>5,000</li>
              </ul>
            </div>
            <div class='point-system'>
              <h3>points system</h3>
              <p>
                Here is a breakdown of which actions acquires points and how
                much each action is worth.
              </p>
              <div class='row point-row'>
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

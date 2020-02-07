import React from 'react';
import { useStore } from 'store';

const Reward = ({ user }) => {
  const [{ auth }] = useStore();
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
                    Get rewarded for doing what you already do best!
                  </p>
                  <p>
                    Check out the list below on how to earn points towards rewards. Chances are you’re already on your way, so keep it up and you can redeem them soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='point-wrap'>
              <ul>
                <li>your points</li>
                <li>{!auth ? '0' : auth.user.totalPoints}</li>
                <button className='btn btn-redeem' disabled='disabled'>
                  REDEEM
                </button>
              </ul>
            </div>
            <div className='point-system'>
              <h3>points system</h3>
              <p>
                Here is a breakdown of which actions acquire points and how much
                each action is worth.
              </p>
              <div className='row point-row'>
                <div className='col-lg-12'>
                  <div className='point-inner-wrap'>
                    <ul>
                      <li>
                        <span>Earning the Avocado Badge</span>
                        <h6>500</h6>
                      </li>
                      <li>
                        <span>Referring a friend that becomes a verified member</span>
                        <h6>50</h6>
                      </li>
                      <li>
                        <span>Posting an avocado dish photo</span>
                        <h6>50</h6>
                      </li>
                      <li>
                        <span>Sharing content from Avocado Nation to your FB, TW, IG or PN.</span>
                        <h6>50</h6>
                      </li>
                      <li>
                        <span>Posting a recipe</span>
                        <h6>25</h6>
                      </li>
                      <li>
                        <span>Logging in to your Avocado Nation Profile every week in a month</span>
                        <h6>100</h6>
                      </li>
                      <li>
                        <span>~ DOES THIS STAY? ~ Submitting an idea to Selma Avocado (moderator)</span>
                        <h6>25</h6>
                      </li>
                      <li>
                        <span>Watching a video</span>
                        <h6>10</h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reward;

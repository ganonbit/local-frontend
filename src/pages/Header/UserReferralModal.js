import React, { useEffect, useState } from 'react';
import { useStore } from 'store';

const UserReferralModal = () => {
  const [{ auth }] = useStore();
  const [refUrl, setRefUrl] = useState('');

  useEffect(() => {
    const fetchUserReferralUrl = async () => {
      const queryUrl = `${process.env.REACT_APP_API_URL}?query={getUser(id:"${auth.user.id}"){id}}`
      const response = await fetch(
        queryUrl,
        {
          headers: {
            authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6IlRlc3Rlcm9uaSBUZXN0ZXJzb24iLCJlbWFpbCI6InRlc3Rlcm9uaUBlbWFpbC5jb20iLCJpYXQiOjE1NzI3NjAwMDEsImV4cCI6MTYwNDMxNzYwMX0.FIf8hQi6a_xZ2De1axZR14xosMmUCOe6mGkltUjnEmA'
          }
        }
      );
      const respJson = await response.json()
      setRefUrl(`${process.env.REACT_APP_FRONTEND_URL}/invite/${respJson.data.getUser.id}`)
    };
    fetchUserReferralUrl()
  }, []);

  const copyToClipboard = () => {
    /* Get the text field */
    var copyText = document.getElementById("referralUrlValue");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert(`Copied your referral url to the clipboard!\n${copyText.value}`);
  }

  return (
      <div className="modal fade"  id="referralUrl" tabIndex="-1" role="dialog"
        aria-labelledby="referralUrl" aria-hidden="true" data-backdrop="false">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="referralUrlTitle">Referral Link</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center">
              <span className="font-weight-bold">Use this link to invite a friend to join Avocado Nation!</span>
              <input className="mt-4" type="url" id="referralUrlValue" defaultValue={refUrl}></input>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={() => copyToClipboard()}>Copy Url</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
  );
};
export default UserReferralModal;

import React, { Component } from 'react'
import  past from './Past';
import PropTypes from 'prop-types'
//  import 'D:\web development cource\react-tutoria\talknwin\src\component\next.css';

export default class Next extends Component {
  static propTypes = {
    prop: PropTypes
  }


  render() {
    return (
      <div>
  
   
   

        <div className='container d-flex justify-content-between align-item-center p-4 border border-primary'>
          <img src="https://coffeecurlsandcreativity.wordpress.com/wp-content/uploads/2016/02/past-present-future1.jpg" class="img-thumbnail w-25" alt="..."></img>
          <h4 className='mt-5'>Let's discuss about timeFrame</h4>
        </div>
        <div className='container  d-flex  justify-content-between mt-4'>
          {/* <h3>Time ?</h3> */}
          <div className='images '>
            <img className="w-25 m-3 img1" src="https://cdn.tinybuddha.com/wp-content/uploads/2016/01/Past-in-the-Sand.jpg  "  role='button' alt="some issue " onClick={()=>{
              alert();
              <past/>
            }}></img>
            <img className="w-25 m-3" src="https://thumbs.dreamstime.com/z/word-sand-28709995.jpg?ct=jpeg" alt="some issue"></img>
            <img className="w-25 m-3" src="https://previews.123rf.com/images/andreypopov/andreypopov1502/andreypopov150200667/37025083-future-written-on-sand-by-sea-at-beach.jpg"></img>
          </div>

        </div>


      </div>
    )
  }
}

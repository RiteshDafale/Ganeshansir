import React from 'react'

export default function Present() {
  return (
    <div>
      <div className='mt-5'>
        <p className='fw-bolder font-monospace text-primary '>Present successfully unlock</p>
        <ul class="container list-group list-group-horizontal p-3 f-flex  justify-content-center">
          <li class="list-group-item li icon-link shadow bg-body-tertiary rounded border border-dark m-2" title='i went to garden' role='button'>V1</li>
          <li class="list-group-item mx-3 shadow bg-body-tertiary rounded border border-dark m-2" role='button'>am</li>
          <li class="list-group-item mx-3 shadow bg-body-tertiary rounded border border-dark m-2" role='button'>is</li>
          <li class="list-group-item mx-3 shadow bg-body-tertiary rounded border border-dark m-2" role='button'>are</li>
          <li class="list-group-item shadow bg-body-tertiary rounded border border-dark m-2" role='button'>have/has</li>
          <li class="list-group-item shadow bg-body-tertiary rounded border border-dark m-2" role='button'>Been</li>
        </ul>

        <div className='container mt-5  d-flex flex-row'>
          <div className='border border-secondary m-1'>
            <p className='text-info bg-dark m-4 p-1 '>S +  V1 + Bogies</p>
            <p className='text-start m-3'>I <abbr title='v1'>go</abbr> </p>
            <p className='text-start m-3'>We meet out friends.</p>
            <p className='text-start m-3'>you talk to me.</p>
            <p className='text-start m-3'>I read the mewpaper.</p>
            <p className='text-start m-3'>I eat breakfast.</p>
            <p className='text-start m-3'>I sleep at 10PM.</p>
          </div>
          <div className='border border-secondary ms-3 m-1'>
            <p className='text-info bg-dark m-4 p-1'>S + am/is/are + Adjective + Bogies</p>
            <p className='text-start m-3'>You are confident in your abilities.</p>
            <p className='text-start m-3'>The book is interesting to all readers.</p>
            <p className='text-start m-3'>I am happy because I got a promotion.</p>
            <p className='text-start m-3'>He is good at writting and talking.</p>
            <p className='text-start m-3'>The students are bored during the lecture.</p>
            <p className='text-start m-3'>You are sleepy because you stayed up all night.</p>
          </div>
          <div className='border border-secondary m-1 ms-3'>
            <p className='text-info bg-dark m-4 p-1'>S + have/has + v3+ Bogies</p>
            <p className='text-start m-3'>You have finished your homework.</p>
            <p className='text-start m-3'>We have met before.</p>
            <p className='text-start m-3'>She has completed the project.</p>
            <p className='text-start m-3'>I have played</p>
            <p className='text-start m-3'>It has stopped raining.</p>
            <p className='text-start m-3'>I have fixed the bug in the code.</p>
          </div>


        </div>
        <div className='container mt-5  d-flex flex-row'>


          <div className='border border-secondary m-1'>
            <p className='text-info bg-dark m-4 p-1'>S+have/has+been+ v3+Bogies</p>
            <p className='text-start m-3'>I have been working on this project for hours.</p>
            <p className='text-start m-3'>We have been waiting for the bus for 30 minutes</p>
            <p className='text-start m-3'>You have been learning new programming skills.</p>
            <p className='text-start m-3'>It has been raining all day.</p>
            <p className='text-start m-3'>I have been reading this book for two hours.</p>
            <p className='text-start m-3'>It has been snowing all day..</p>
          </div>
        </div>
      </div>
    </div>
  )
}
 
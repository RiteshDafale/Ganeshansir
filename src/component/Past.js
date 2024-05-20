import React from 'react'
import next from './Next';

function Past() {
  return (
    <div className='mt-5'>
      <p className='fw-bolder font-monospace text-primary '>Past successfully unlock</p>
      <ul class="container list-group list-group-horizontal p-3 f-flex  justify-content-center">
        <li class="list-group-item li icon-link shadow bg-body-tertiary rounded border border-dark m-2" title='i went to garden' role='button'>V2</li>
        <li class="list-group-item mx-3 shadow bg-body-tertiary rounded border border-dark m-2" role='button'>Was</li>
        <li class="list-group-item mx-3 shadow bg-body-tertiary rounded border border-dark m-2" role='button'>Were</li>
        <li class="list-group-item mx-3 shadow bg-body-tertiary rounded border border-dark m-2" role='button'>Had</li>
        <li class="list-group-item shadow bg-body-tertiary rounded border border-dark m-2" role='button'>V2</li>
      </ul>

      <div className='container mt-5  d-flex flex-row'>
        <div className='border border-secondary m-1'>
          <p className='text-info bg-dark m-4 p-1 '>S +  V2 + Bogies</p>
          <p className='text-start m-3'>I went </p>
          <p className='text-start m-3'>We met that person</p>
          <p className='text-start m-3'>you did</p>
          <p className='text-start m-3'>They talked</p>
          <p className='text-start m-3'>He informed</p>
          <p className='text-start m-3'>She Finished</p>
        </div>
        <div className='border border-secondary m-1'>
          <p className='text-info bg-dark m-4 p-1'>S + was/were + v4+ Bogies</p>
          <p className='text-start m-3'>The bug was fixed.</p>
          <p className='text-start m-3'>She was seen at Bogies </p>
          <p className='text-start m-3'>They were caught inside.</p>
          <p className='text-start m-3'>He was spotted nearby.</p>
          <p className='text-start m-3'>We were observed playing.</p>
          <p className='text-start m-3'>The kids were heard laughing</p>
        </div>
        <div className='border border-secondary m-1'>
          <p className='text-info bg-dark m-4 p-1'>S + had + v3+ Bogies</p>
          <p className='text-start m-3'>We had merged branches.</p>
          <p className='text-start m-3'>She had finished work.</p>
          <p className='text-start m-3'>They had left early.</p>
          <p className='text-start m-3'>He had eaten lunch.</p>
          <p className='text-start m-3'>We had completed tasks.</p>
          <p className='text-start m-3'>I had seen him.</p>
        </div>
        <div className='border border-secondary m-1'>
          <p className='text-info bg-dark m-4 p-1'>S+ had+ been+V4+Bogies</p>
          <p className='text-start m-3'>She had been working.</p>
          <p className='text-start m-3'>They had been studying.</p>
          <p className='text-start m-3'>He had been running.</p>
          <p className='text-start m-3'>We had been waiting.</p>
          <p className='text-start m-3'>I had been cooking.</p>
          <p className='text-start m-3'>She had been debugging.</p>
        </div>

      </div>
      <div className='container mt-5  d-flex flex-row'>


        <div className='border border-secondary m-1'>
          <p className='text-info bg-dark m-4 p-1'>S+ was, were+ Adjective</p>
          <p className='text-start m-3'>She was happy.</p>
          <p className='text-start m-3'>They were excited.</p>
          <p className='text-start m-3'>He was tired.</p>
          <p className='text-start m-3'>We were busy.</p>
          <p className='text-start m-3'>It was cold.</p>
          <p className='text-start m-3'>The database was relational</p>
        </div>
        <div className='border border-secondary m-1'>
          <p className='text-info bg-dark m-4 p-1'>S+ was, were + adverb + adjective</p>
          <p className='text-start m-3'>She was exceptionally talented.</p>
          <p className='text-start m-3'>They were incredibly helpful.</p>
          <p className='text-start m-3'>He was surprisingly calm. </p>
          <p className='text-start m-3'>We were extremely tired.</p>
          <p className='text-start m-3'>The team was remarkably efficient.</p>
          <p className='text-start m-3'>The code was surprisingly concise.</p>
        </div>
      </div>


    </div>




  )
}

export default Past

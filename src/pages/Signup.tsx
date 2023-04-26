import React from 'react';

const Signup = () => {

const sigininuser = (e) => {
  console.log('worked')

}
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
    <div className='text-center'>
<h2 className='text-xl font-bold'> Create new Accont</h2>
  </div>
      <form onSubmit={()=> sigininuser} className="card-body w-96">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name </span>
          </label>
          <input required type="text" placeholder="Your full name " className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input required type="text" placeholder="Your email " className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input required type="text" placeholder="Your password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Create Account</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Signup;
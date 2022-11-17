import React from 'react';

const Blog = () => {
    return (
        <div className='min-h-screen grid justify-items-center mt-5 mx-2'>
            <div className="card md:w-10/12 bg-gray-900 text-gray-100 my-5">
            <div className="card-body items-center">
                <h2 className="card-title text-2xl">1. What is CORS?</h2>
                <p className='text-justified'><span className='font-semibold'> Answer(1)</span>: Cross-Origin Resource Sharing (CORS)
                <strong>
            Cross-origin resource sharing (cors) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served
            </strong>
            <strong>
            A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. 
            </strong>
                </p>
                </div>
            </div>


            <div className="card md:w-10/12 bg-gray-900 text-gray-100 my-5">
            <div className="card-body items-center">
                <h2 className="card-title text-2xl">2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p><span className='font-semibold'> Answer(2.1)</span>: <strong>
            Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
            </strong> <br />
                    <br />
                    
                    <span className='font-semibold'> Answer(2.2)</span>:  <strong>
            whether you need an alternative to the entire Firebase platform or an alternative to a specific Firebase feature, here's a breakdown of other tools worth considering.
            1..Parse
            2..Supabase
            3..Kuzzel
            4..Back4App
            </strong>

                </p>
                </div>
            </div>


            <div className="card md:w-10/12 bg-gray-900 text-gray-100 my-5">
            <div className="card-body items-center">
                <h2 className="card-title text-2xl">3. How does the private route work?</h2>
                <p><span className='font-semibold'> Answer(3)</span>: <strong>
            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
            </strong>
            <strong>
            The private route component is used to protect selected pages in a React app from unauthenticated users.
            </strong>
                </p>
                </div>
            </div>

            <div className="card md:w-10/12 bg-gray-900 text-gray-100 my-5">
            <div className="card-body items-center">
                <h2 className="card-title text-2xl">4. What is Node? How does Node work?</h2>
                <p><span className='font-semibold'> Answer(4.1)</span>: <strong>
            Node is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
            </strong> <br />
                    <br />
                    
                    <span className='font-semibold'> Answer(4.2)</span>: <strong>
            the server consists of one thread processing one event after another. A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function.s
            </strong>
                </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
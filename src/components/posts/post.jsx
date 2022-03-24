import React, { Component } from 'react';
import './post.css';

class PostData extends Component {

    componentDidMount = () => {
    }

    render() {
        var posts = this.props.posts;
        return (
            <div>
                {posts.menuItems.map(post => (
                    <div className='eachPost'>
                        <div className='postHeader'>
                            <p>hello,world</p>
                            <span className='postDate'> 5 Mins Ago</span>
                        </div>
                        <div className='postBody'>
                            <div className='d-pic'>
                                <div className='pic'></div>
                            </div>
                            <div className='postBodyContent'>
                                <p className='userName'>Elon Musk</p>
                                <p className='contents'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nibh, laoreet at fermentum ac, lacinia eu nulla. Nunc viverra vestibulum ultrices. Nullam efficitur, purus sed placerat viverra, magna leo tincidunt diam, ut tincidunt nunc nunc id nulla. Quisque auctor lacinia dolor, ac aliquam nibh dapibus sed.</p>
                                <p className='hashtags'><span href="#">#testimoni</span> #testimonial #testing #testimony #testshoot #testosterone #tester #Testi #testdrive #tests #testimonials</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PostData;
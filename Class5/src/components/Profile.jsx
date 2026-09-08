import React, { useState } from "react";


const Profile = () => {

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [posts, setPosts] = useState([]);


    function handleSubmit(e) {
        e.preventDefault();

        const newPost = {
            name: name,
            title: title,
            desc: desc
        };

        setPosts([...posts, newPost]);

        setName("");
        setTitle("");
        setDesc("");
    }


    return (
        <div className="main-container">

            <h1> Create Your Post!!!</h1>

            <form className="post-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your name" value={name} onChange={(e) => { setName(e.target.value); }} />
                <input type="text" placeholder="Write your title" value={title} onChange={(e) => { setTitle(e.target.value); }} />

                <textarea placeholder="Write your description" value={desc} onChange={(e) => { setDesc(e.target.value); }}></textarea>

                <button type="submit"> Create Post</button>

            </form>


            <div className="cards-container">

                {posts.map((elem, index) => {

                    return (
                        <div className="post-card" key={index}>


                            <div className="profile-icon">
                                {elem.name.charAt(0).toUpperCase()}
                            </div>


                            <h2>{elem.title}</h2>

                            <p className="description">
                                {elem.desc}
                            </p>

                            <hr />

                        </div>
                    );

                })}

            </div>

        </div>
    );
};

export default Profile;
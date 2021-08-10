import SimpleReactFooter from "simple-react-footer";
import React from 'react'

function Footer2() {


    const description = "Just a footer. Please edit it before uploading.Just a footer. Please edit it before uploading.Just a footer. Please edit it before uploading.Just a footer. Please edit it before uploading.Just a footer. Please edit it before uploading";
    const title = "Footer";
    const footerStyle = {
        width: "100px",        
    };
    const columns = [
        {
            title: "Resources",
            resources: [
                {
                    name: "About",
                    link: "/about"
                },
                {
                    name: "Home",
                    link: "/home"
                },
                {
                    name: "Houses",
                    link: "/houses"
                },
                {
                    name: "Blog",
                    link: "/blog"
                }
            ]
        },
        {
            title: "Legal",
            resources: [
                {
                    name: "Legal1",
                    link: "/legal1"
                },
                {
                    name: "Legal2",
                    link: "/legal2"
                }
            ]
        },
        {
            title: "Visit",
            resources: [
                {
                    name: "Name1",
                    link: "/name1"
                },
                {
                    name: "Name2",
                    link: "/name2"
                }
            ]
        }
    ];
    return <SimpleReactFooter
        style={footerStyle}
        description={description}
        title={title}
        columns={columns}
        linkedin="rushi-chudasama-63473819a/"
        facebook="rushi.chudasama.9/"
        twitter=""
        instagram="rushiii.js/"
        youtube="UCqmRpWw9tjj4tUCR600jH6Q"
        pinterest=""
        copyright="Intralogic Soutions"
        iconColor="black"
        backgroundColor="#AF9A7D"
        fontColor="black"
        copyrightColor="white"
        width="1000"
    />;
};


export default Footer2

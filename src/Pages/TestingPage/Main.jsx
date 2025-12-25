import Form from './Form';
import Lists from './Lists';
import Table from './Table';
import { useState,useEffect } from 'react';

const Main = () => {

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const [userList,setUserList] = useState({});

        const generateString = (length) => {
            let result = ' ';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return result;
        }

        // console.log();
    // const userList =  [{
    //     name :"kazim" ,
    //     class :"12"
    // }];

    const myFormhanderler = (e) => {
        console.log(e.target);
        // setUserList({
        //     name:generateString(10)
        // })
    }

    const randomString = (e) => {
        setUserList({
            name:generateString(10)
        })
    }
    


    console.log("Main page",userList);

    return <>
        <div className='bg-rose-600 text-gray-200 py-2 px-2 text-center text-4xl'>
            <h1 className=''>This is my Mian page</h1>
        </div>
        <Form  />
        <Table />
        <Lists data={userList} handler={(f) => myFormhanderler(f)} randomString={randomString}/>
    </>
}

export default Main;
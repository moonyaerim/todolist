import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext=createContext();

export function DarkModeProvider({children}){ //인자로 자식노드를 받아옴

    //DarkModeContext에 있는 Provider를 이용하여 자식노드를 감싸주어 자식요소에게 값을 전달해 줄 수 있는 영역을 감쌈
    const [darkMode,setDarkMode]=useState(false); //처음에는 light mode
    const toggleDarkMode=()=>{
        setDarkMode((prev)=>!prev);
        updateDarkMode(!darkMode);
    }

    //useEffect(()=>{},[]) //배열이 비어있으면 component가 실행될 때 한번만 실행
    //useEffect(()=>{},[darkMode,변수2]) //배열이 변수가 있으면 component가 실행될 때 한번은 실행되고 darkMode의 값이 바뀔때마다 함수가 실행됨
    useEffect(()=>{
        const isDark=localStorage.theme==="dark";

        setDarkMode(isDark)
        updateDarkMode(!isDark);
    },[])

    //자식에게 전달할 내용은 value안에 객체로 전달
    return (
    <DarkModeContext.Provider value={{darkMode,toggleDarkMode}}>
        {children}
        </DarkModeContext.Provider>
    );
}

export const useDarkMode=()=>{
    return useContext(DarkModeContext);
};

function updateDarkMode(darkMode){
    if(darkMode){
        document.documentElement.classList.add("dark");
        localStorage.theme="dark";
    }else{
        document.documentElement.classList.remove("dark");
        localStorage.theme="light";
    }
}
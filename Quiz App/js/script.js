// hapa code zote za jaribio

// selectig all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .timer_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if button ya kuaza jaribio imebonyezwa

start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); // onesha info box
}
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //ficha info box
}

//if button ya kuendelea imebonyezwa
continue_btn.onclick = ()=> {
    info_box.classList.remove("activeInfo");//ficha info box
    quiz_box.classList.add("activeQuiz"); //onsha quiz box
    showQuestions(0); // tunaita function ya kuonesha maswali
    queCounter(1); // tunapitisha 1 agument to queCounter
    startTimer(15);// tunaita function ya kuanza muda
    startTimerLine(0); //  tunaita function ya kuoesha mstari wa sekunde

}

let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

//if restartQuiz button imebonyezwa

restart_quiz.onclick= () => {
    quiz_box.classList.add("activeQuiz");//onesha quiz box
    result_box.classList.remove("activeResult");//ficha result box
}
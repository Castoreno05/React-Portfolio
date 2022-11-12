export const projectData = [
  {
    id: 1,
    title: "BootCamp Blog",
    href: "https://bootcampblogg.herokuapp.com/",
    repo: "https://github.com/Castoreno05/BootcampBlog",
    target: "_blank",
    video: (
      <img src={require("../../Videos/bootcampBlog.gif")} alt="camp-gif" />
    ),
    description:
      "The Bootcamp Blog is a MERN stack application that allows users to sign-up/log-in and post blogs for other users to read and comment on. Create posts in the dashboard and save them to your profile. If edits of the post need to be made, the options to delete or update are given. When a user submits a post to the homepage, any user currently signed in will have the oppoptunity to leave comments. Select the gif above to navigate to the deployed link",
  },
  {
    id: 2,
    title: "WeatherApp",
    href: "https://castoreno05.github.io/WeatherApp/",
    repo: "https://github.com/Castoreno05/WeatherApp",
    target: "_blank",
    video: (
      <img src={require("../../Videos/WeatherGif.gif")} alt="weather-gif" />
    ),
    description:
      "Created a Weather Application with the help of a third party API service. Enter a city name in the search bar and the application will make an API call to retrieve, then append live data onto the home page. The data consists of: tempurature, wind speed, humidity, and UV index for the current and five day forecast. Once a search has been made the application saves the city in local strorage. Doing this allows the user to generate another API call to get live results of the weather.",
  },
  {
    id: 3,
    title: "Professional README Generator",
    repo: "https://github.com/Castoreno05/Professional-README-Generator",
    target: "_blank",
    video: (
      <img
        src={require("../../Videos/readmeGenerator.gif")}
        alt="generator-gif"
      />
    ),
    description:
      "Utilize this command-line application to build a professional README.md for current or future projects. Answer the questions and give a brief description of the topics after the application has been installed and started in the integrated terminal. When the questions are finished the application will generate and store a README.md inside the Develop folder.",
  },
  {
    id: 4,
    title: "Work Day Planner",
    href: "https://castoreno05.github.io/WorkDayPlanner/",
    repo: "https://github.com/Castoreno05/WorkDayPlanner",
    target: "_blank",
    video: (
      <img src={require("../../Videos/workdayPlanner.gif")} alt="planner-gif" />
    ),
    description:
      "Download this application to start tracking and planning your workday tasks. When the repository has been cloned, open the application within the browser. This application uses local date and time to display to the user the past, present, and future hours in a workday. Inside the time blocks, add a task and select the blue save button. The application will then save the task to local storage for future reference.",
  },
  {
    id: 5,
    title: "codeQuiz",
    href: "https://castoreno05.github.io/codeQuiz/",
    repo: "https://github.com/Castoreno05/codeQuiz",
    target: "_blank",
    video: <img src={require("../../Videos/codeQuiz.gif")} alt="quiz-gif" />,
    description:
      "Press play! This module will ask you 5 questions that will put your JavaScript, Developer Tools, and basic coding skills to the test. Each question is worth 20 points, so try to not miss! With every question that is missed, the timer drops 10 seconds, increasing the pressure on the player. When the timer runs out the game is over and the score that you ended with will display on the screen. A 'Save initals' and 'Input Field' will display. Save your initials, reset and play again!",
  },
];

# Smart-Board

Welcome to the repository for our IoT-based website that enables seamless control of switchboards and fan regulation in your home from any corner of the world.

## Features

- **Switch Board Control**: Remotely handle switchboards in your home.
- **Fan Regulation**: Control fan speed with millisecond response time.
- **React-based Web Interface**: Intuitive and responsive user interface built with React.
- **Firebase Integration**: Utilizes Firebase for secure password login and real-time database functionality.
- **State Synchronization**: Integrated mechanism to listen for state changes in switchboards, ensuring immediate updates across all connected devices.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/niranjan-official/Smart-Board-React.git
    cd smart-board-react
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up Firebase:

    - Create a Firebase project and set up a Realtime Database.
    - Obtain your Firebase configuration details.
    - Add the configuration to the `src/firebase.js` file.

4. Start the development server:

    ```bash
    npm start
    ```

### Usage

1. Open your web browser and go to `http://localhost:3000`.
2. Log in with the password: `1234`.
3. Explore the web interface and control your switchboards and fan.

### How to Run (in Bash)

```bash
git clone https://github.com/your-username/iot-home-control.git
cd iot-home-control
npm install
# Set up Firebase and add configuration to src/firebase.js
npm start
```

Visit `http://localhost:3000` in your web browser and log in with the password `1234`.

Feel free to customize and extend the code according to your requirements. Happy home controlling!

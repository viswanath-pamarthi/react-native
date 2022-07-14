# react-native

create a react native project:
    npx react-native init ProjectName 

with specific version of react:
    npx react-native init food --version 0.68.2   

commands to run this project
    npx react-native start --port=8084
    npx react-native run-ios --port=8084
    npx react-native run-android --port=8084

Install pods in iOS:
    npx pod-install ios

List the processes using a port number:
    lsof -i :portNumber
    lsof -i :8084

Take process id from above listing and kill the process if needed:
    kill -9 PID
    kill $(lsof -t -i:8081);

List all available iOS devices:
    xcrun simctl list devices
    npx react-native run-ios --port=8085 --simulator="iPhone 11 (14.5)" 

delete iOS Buid folder:
    rm -rf ios/build/;

Blog App:
    https://reactnative.dev/docs/troubleshooting#using-a-port-other-than-8081

    npx react-native start --port=8085
    npx react-native run-ios --port=8085
    npx react-native run-android --port=8085

    json-server:
        json-server directory and run to start json-server:
        npm run db

    run ngrok(tunnels localhost - by default json-server runs on 3000 port
    ngrok http 3000

track-server:
    run track-server:
    npm run dev
    




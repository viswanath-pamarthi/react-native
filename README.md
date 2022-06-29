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

List all available iOS devices:
xcrun simctl list devices
npx react-native run-ios --port=8085 --simulator="iPhone 11 (14.5)" 
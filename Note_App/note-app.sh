#!/bin/bash

set -e

print_message() {
  echo -e "\n===== $1 =====\n"
}

if ! command -v node &>/dev/null; then
  print_message "Node.js is not installed. Installing Node.js..."
  if [[ "$OSTYPE" == "darwin"* ]]; then
    brew install node
  elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
  else
    echo "Unsupported OS. Please install Node.js manually."
    exit 1
  fi
fi

if ! command -v npm &>/dev/null; then
  print_message "npm is not installed. Please install npm and try again."
  exit 1
fi

echo "Trying to install docker dependencies"
echo "be sure you have docker already running in your system"

cd ./backend
docker compose up -d

echo "Back End container running successfully"

echo "Changing to front end directory"

cd ..

pwd

cd ./frontend

docker build -t note-challenge .
docker run -d -p 3000:3000 note-challenge

echo "Front End container running successfully"

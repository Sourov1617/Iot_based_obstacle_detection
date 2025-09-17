# 🚂 IoT-Enabled Real-Time Obstacle Detection and Automated Train Stopping System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![IoT](https://img.shields.io/badge/IoT-Enabled-green.svg)](https://en.wikipedia.org/wiki/Internet_of_things)
[![Railway Safety](https://img.shields.io/badge/Railway-Safety-red.svg)](https://railway.gov.in/)

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [System Architecture](#system-architecture)
- [Hardware Components](#hardware-components)
- [Software Components](#software-components)
- [Installation](#installation)
- [Usage](#usage)
- [Web Interface](#web-interface)
- [Contributing](#contributing)
- [License](#license)

## 🔍 Overview

This project implements an **IoT-based railway obstacle detection system** that combines multiple sensors and computer vision to ensure railway track safety. The system monitors environmental conditions and detects obstacles on railway tracks in real-time, providing automated alerts and stopping mechanisms to prevent accidents.

The solution integrates:
- **Computer Vision AI** for visual obstacle detection
- **Multiple IoT sensors** for comprehensive environmental monitoring
- **Real-time web dashboard** for monitoring and control
- **Automated emergency response** system

## ✨ Features

- 🎯 **Real-time Obstacle Detection** using ultrasonic sensors and computer vision
- 🌡️ **Environmental Monitoring** with temperature, humidity, and moisture sensors
- 👁️ **Motion Detection** using PIR (Passive Infrared) sensors
- 📷 **Live Camera Feed** with AI-powered object detection
- 🌐 **Web-based Dashboard** for real-time monitoring
- ⚡ **Automated Train Stopping** system integration
- 📊 **Data Logging** and analytics
- 🚨 **Emergency Alert System**
- 📱 **Responsive Design** for mobile and desktop access

## 🏗️ System Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   IoT Sensors   │───▶│  Microcontroller │───▶│  Web Dashboard  │
│                 │    │   (Arduino/ESP)  │    │   (HTML/CSS/JS) │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                        │                        │
         ▼                        ▼                        ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│ Data Processing │    │   Computer       │    │   Alert System  │
│   & Analytics   │    │     Vision       │    │  & Emergency    │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## 🔧 Hardware Components

### Primary Sensors

| Sensor | Purpose | Specifications |
|--------|---------|----------------|
| **HC-SR04 Ultrasonic** | Obstacle distance measurement | Range: 2cm - 400cm, Accuracy: 3mm |
| **PIR Motion Sensor** | Movement detection | Detection Range: 7m, Angle: 110° |
| **DHT11** | Temperature & Humidity | Temp: 0-50°C, Humidity: 20-90% RH |
| **Soil Moisture Sensor** | Track moisture monitoring | Analog output, Water level detection |
| **Camera Module** | Visual obstacle detection | Resolution: 1080p, Night vision capable |

### Additional Components
- **Microcontroller**: Arduino Uno/ESP32
- **Power Supply**: 12V DC adapter
- **Communication**: WiFi/Bluetooth modules
- **Display**: LCD/OLED for local status
- **Actuators**: Servo motors for emergency braking
- **Storage**: SD card for data logging

## 💻 Software Components

### Frontend
- **HTML5**: Structure and semantic markup
- **CSS3**: Responsive design and animations
- **JavaScript**: Real-time data updates and interactivity
- **Google Fonts**: Inter font family for modern typography

### Backend (Planned/Integrated)
- **Python**: Data processing and sensor interfacing
- **OpenCV**: Computer vision and image processing
- **TensorFlow/PyTorch**: Machine learning models for object detection
- **Flask/FastAPI**: Web server and API endpoints
- **SQLite/MongoDB**: Data storage and logging

### Embedded Systems
- **Arduino IDE**: Microcontroller programming
- **ESP32/Arduino Libraries**: Sensor interfacing
- **WiFi/Bluetooth**: Wireless communication protocols

## 🚀 Installation

### Prerequisites
```bash
# For web interface
- Web browser with JavaScript enabled
- Local web server (optional)

# For IoT backend (if implementing)
- Python 3.8+
- Arduino IDE
- Required Python packages (see requirements.txt)
```

### Quick Start
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/IoT_obstacle_detection.git
   cd IoT_obstacle_detection
   ```

2. **Open the web interface**
   ```bash
   # Option 1: Direct file opening
   open index.html in your web browser
   
   # Option 2: Local server
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

3. **Hardware Setup** (for full implementation)
   ```bash
   # Install Arduino libraries
   # Connect sensors according to circuit diagram
   # Upload Arduino sketch to microcontroller
   ```

## 📊 Usage

### Web Dashboard Features

The web interface provides real-time monitoring of:

- ⏰ **Current Time**: Live clock with IST timezone
- 📍 **Location**: GPS coordinates and location details
- 🚄 **Train Speed**: Current velocity monitoring
- 🌡️ **Temperature**: Environmental temperature (°C)
- 💧 **Humidity**: Relative humidity percentage
- 📏 **Obstacle Distance**: Proximity detection in real-time
- 🌤️ **Weather Conditions**: Current weather status
- ⚠️ **Obstacle Status**: Clear/Detected status with visual indicators

### Sensor Data Interpretation

| Sensor Reading | Status | Action |
|----------------|--------|--------|
| Distance < 50cm | 🚨 **CRITICAL** | Immediate stop signal |
| Distance 50-100cm | ⚠️ **WARNING** | Slow down alert |
| Distance > 100cm | ✅ **SAFE** | Normal operation |
| PIR Motion Detected | 🔍 **INVESTIGATING** | Verify with camera |
| Temperature > 40°C | 🌡️ **HIGH TEMP** | Equipment monitoring |

## 🌐 Web Interface

### Main Dashboard
- **Live Data Grid**: Real-time sensor readings with status indicators
- **Object Detection Panel**: Camera feed with AI analysis
- **Interactive Controls**: Manual override buttons
- **Status Indicators**: Color-coded system health

### Key Features
- 📱 **Responsive Design**: Works on mobile and desktop
- 🔄 **Auto-refresh**: Data updates every second
- 🎨 **Modern UI**: Clean and intuitive interface
- 🚨 **Alert System**: Visual and audio notifications

## 📁 Project Structure

```
IoT_obstacle_detection/
├── index.html          # Main web interface
├── style.css           # Styling and responsive design
├── script.js           # Frontend JavaScript logic
├── location.jpg        # Location reference image
├── README.md           # Project documentation
├── arduino/            # (Future) Arduino sketches
├── python/             # (Future) Python backend
├── docs/               # (Future) Additional documentation
└── data/               # (Future) Data logs and analytics
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Areas
- 🔧 Hardware integration and testing
- 💻 Backend API development
- 🤖 Machine learning model improvements
- 📱 Mobile app development
- 📚 Documentation and tutorials
- 🧪 Testing and quality assurance

## 🛡️ Safety Considerations

- ⚠️ **Emergency Protocols**: Always maintain manual override capabilities
- 🔒 **Data Security**: Encrypt all communication channels
- 🔋 **Power Backup**: Implement redundant power systems
- 📡 **Communication**: Ensure reliable connectivity
- 🧪 **Testing**: Thoroughly test in controlled environments before deployment

## 📈 Future Enhancements

- [ ] **AI/ML Integration**: Advanced object classification
- [ ] **Mobile App**: Companion mobile application
- [ ] **Cloud Integration**: IoT cloud platform connectivity
- [ ] **Predictive Analytics**: Maintenance scheduling
- [ ] **Multi-language Support**: Localization features
- [ ] **API Development**: RESTful API for third-party integration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Project Lead**: [Your Name]
- **Hardware Engineer**: [Team Member]
- **Software Developer**: [Team Member]
- **AI/ML Specialist**: [Team Member]

## 📞 Contact

For questions, suggestions, or support:
- 📧 Email: [your.email@example.com]
- 💬 Issues: [GitHub Issues](https://github.com/yourusername/IoT_obstacle_detection/issues)
- 📱 LinkedIn: [Your LinkedIn Profile]

## 🙏 Acknowledgments

- Railway Safety Authority for guidance and requirements
- Open-source community for libraries and frameworks
- IoT sensor manufacturers for documentation and support
- Computer vision research community for algorithms and models

---

**⚠️ Disclaimer**: This is a prototype system. For production railway deployment, ensure compliance with all safety regulations and conduct thorough testing.

**🚂 Stay Safe, Stay Connected!** 
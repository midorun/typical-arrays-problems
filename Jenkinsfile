
pipeline {
  agent any

  tools {nodejs "node"}

  stages {
    stage('Clonning Git') {
        steps {
            git 'https://github.com/midorun/typical-arrays-problems'
        }
    } 
            
    stage('Build') {
      steps {
        bat 'npm install'
      }
    }

    stage('Test') {
      steps {
        bat 'npm test'
      }
    }

    stage('Archive'){
                steps{
			dir('C:\\'){
				echo "Current build: ${BUILD_NUMBER}"
				zip zipFile: "${BUILD_NUMBER}.zip", archive:false, dir: 'ProgramData\\Jenkins\\.jenkins\\workspace\\job'
				archiveArtifacts artifacts: "${BUILD_NUMBER}.zip"
			}
		  }
    }

    stage('Deploy'){
		  steps{
			  dir('C:\\'){
				  script{
					  try
					  {
						  bat("md C:\\Deploy\\")
					  }catch(Exception e){}
				  }
				  unzip zipFile: "${BUILD_NUMBER}.zip", dir: 'C:\\Deploy'
			  }
		  }
	  }
  }
  post {
	  always{
		emailext attachLog: true, body: '''$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS:
		Check console output at $BUILD_URL to view the results. ${JELLY_SCRIPT, template="html"}''', subject: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!', to: 'vitya14022001@mail.ru'
	  }
          cleanup {
              cleanWs()
          }
   }
}

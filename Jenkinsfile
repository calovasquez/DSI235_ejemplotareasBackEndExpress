pipeline {
    agent any
    tools {nodejs "node18"}
    stages{
        stage("Build"){
            steps{
                echo "=====Executing Build====="
                sh "npm install"
            }
        }
        stage("Test"){
            steps{
                echo "=====Executing Test====="
                sh "npm test"
            }
        }
    }
    post{
        always{
            echo "=====Always====="
        }
        success{
            echo "=====Pipeline Executed Successfully====="
        }
        failure{
            echo "=====Pipeline Execution Failed====="
        }
    }
}
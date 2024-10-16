pipeline {
    agent any
    tools {nodejs "node12"}
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
                sh "npm test -- --timeout 10000"
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
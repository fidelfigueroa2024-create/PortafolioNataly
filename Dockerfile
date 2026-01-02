# Stage 1: Build the WAR
FROM maven:3.9.0-openjdk-17 AS build
WORKDIR /app

# Copia pom y src
COPY pom.xml .
COPY src ./src

# Construye el WAR sin tests
RUN mvn clean package -DskipTests

# Stage 2: Deploy en Tomcat
FROM tomcat:9.0-jdk17
RUN rm -rf /usr/local/tomcat/webapps/*

# Copia el WAR generado desde el stage anterior
COPY --from=build /app/target/landing-spring-1.0-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war

EXPOSE 8080

CMD ["catalina.sh", "run"]

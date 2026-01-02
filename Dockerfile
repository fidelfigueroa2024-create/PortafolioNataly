# ==============================
# Stage 1: Build WAR con Maven
# ==============================
FROM maven:3.9.0-jdk-17-openjdk AS build

WORKDIR /app

# Copiar pom.xml primero para aprovechar cache de dependencias
COPY pom.xml .

# Copiar el código fuente
COPY src ./src

# Construir el WAR sin tests
RUN mvn clean package -DskipTests

# ==============================
# Stage 2: Deploy en Tomcat
# ==============================
FROM tomcat:9.0-jdk17

# Limpiar aplicaciones por defecto de Tomcat
RUN rm -rf /usr/local/tomcat/webapps/*

# Copiar WAR generado desde el stage de build
COPY --from=build /app/target/landing-spring-1.0-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war

# Exponer el puerto 8080 para Render
EXPOSE 8080

# Comando para arrancar Tomcat
CMD ["catalina.sh", "run"]

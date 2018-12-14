 # Instalación 
 
 ## Preparación: Base de datos
 ```SQL 
 CREATE DATABASE moodle35 WITH TEMPLATE moodle34 OWNER usuario;
 ```
## Preparación: Sitio
```bash
mkdir /var/www/moodledata35  
cd /var/www/html  
git clone https://github.com/vvbv/moodle.git  
mv moodle moodle35  
cd moodle35/blocks  
git clone https://github.com/sistemasases/moduloases.git  
mv moduloases ases  
# Cambiar max_execution_time = 30 → max_execution_time = 400 en el siguiente archivo  
nano /etc/php/$(php -v | head -n 1 | cut -d " " -f 2 | cut -f1-2 -d".")/apache2/php.ini 
```
 **Configurar según la máquina la url de acceso en config.php y los usuarios de la base de datos.**  
 ```bash
google-chrome http://127.0.0.1/moodle35/install.php || firefox http://127.0.0.1/moodle35/install.php
```
**Finalmente ingresar con 'desadmin'**

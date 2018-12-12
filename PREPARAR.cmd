@echo off

color a
echo ==================================
echo = =
echo = Bip bip bip 
echo = =
echo ==================================
echo.
echo.



echo Borrando Carpeta 'Production'
rmdir /q /s "C:\Users\elPaulo\Desktop\cuartoRey\"


pause
echo Creando Carpeta 'Production'
mkdir "C:\Users\elPaulo\Desktop\cuartoRey\"


pause
echo Copiando archivos de PRODUCCIÓN a DESARROLLO
xcopy /q /s "E:\Google Drive\Proyectos\App Cuarto Rey\*" "C:\Users\elPaulo\Desktop\cuartoRey\"


pause
echo Eliminando archivos innecesarios
rmdir /q /s "C:\Users\elPaulo\Desktop\cuartoRey\_components"
rmdir /q /s "C:\Users\elPaulo\Desktop\cuartoRey\_js"
rmdir /q /s "C:\Users\elPaulo\Desktop\cuartoRey\_originales"
rmdir /q /s "C:\Users\elPaulo\Desktop\cuartoRey\_pug"
rmdir /q /s "C:\Users\elPaulo\Desktop\cuartoRey\_scss"
rmdir /q /s "C:\Users\elPaulo\Desktop\cuartoRey\PREPARAR.cmd"
rmdir /q /s "C:\Users\elPaulo\Desktop\cuartoRey\prepros-6.config"


pause
exit
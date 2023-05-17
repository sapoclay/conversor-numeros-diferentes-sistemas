            // Función para convertir de decimal a binario
            function decimalToBinary(decimal) {
                let binary = "";
                while (decimal > 0) {
                    binary = (decimal % 2) + binary;
                    decimal = Math.floor(decimal / 2);
                }
                // Eliminar ceros no significativos a la izquierda
                binary = binary.replace(/^0+/, '');
                return binary;
            }

            // Función para convertir decimal a hexadecimal
            function decimalToHex(decimal) {
                let hex = "";
                const hexDigits = "0123456789ABCDEF";
                while (decimal > 0) {
                    const remainder = decimal % 16;
                    hex = hexDigits[remainder] + hex;
                    decimal = Math.floor(decimal / 16);
                }
                return hex;
            }

            // Función para pasar de decimal a octal
            function decimalToOctal(decimal) {
                let octal = "";
                while (decimal > 0) {
                    const remainder = decimal % 8;
                    octal = remainder + octal;
                    decimal = Math.floor(decimal / 8);
                }
                return octal;
            }

            // Función para convertir binario a decimal
            function binaryToDecimal(binary) {
                let decimal = 0;
                const binaryLength = binary.length;
                for (let i = 0; i < binaryLength; i++) {
                    const digit = parseInt(binary.charAt(binaryLength - 1 - i));
                    decimal += digit * Math.pow(2, i);
                }
                return decimal;
            }

            // Función para convertir binario a hexadecimal
            function binaryToHex(binary) {
                while (binary.length % 4 !== 0) {
                    binary = '0' + binary;
                }

                let hex = '';
                for (let i = 0; i < binary.length; i += 4) {
                    const chunk = binary.substr(i, 4);
                    const decimal = parseInt(chunk, 2);
                    const hexDigit = decimal.toString(16).toUpperCase();
                    hex += hexDigit;
                }

                return hex;
            }


            // Función para convertir binario a octal
            function binaryToOctal(binary) {
                while (binary.length % 3 !== 0) {
                    binary = '0' + binary;
                }

                let octal = '';
                for (let i = 0; i < binary.length; i += 3) {
                    const chunk = binary.substr(i, 3);
                    const decimal = parseInt(chunk, 2);
                    octal += decimal.toString(8);
                }

                return octal;
            }

            // Función para convertir hexadecimal a decimal
            function hexToDecimal(hex) {
                const decimal = parseInt(hex, 16);
                return decimal;
            }

            // Función para convertir hexadecimal a binario
            function hexToBinary(hex) {
                let binary = '';
                for (let i = 0; i < hex.length; i++) {
                    const decimal = parseInt(hex.charAt(i), 16);
                    const binaryChunk = decimal.toString(2).padStart(4, '0');
                    binary += binaryChunk;
                }
                // Eliminar ceros no significativos a la izquierda
                binary = binary.replace(/^0+/, '');
                return binary;
            }

            // Función para pasar de hexadecimal a octal
            function hexToOctal(hex) {
                // Convierte el número hexadecimal a decimal
                const decimal = parseInt(hex, 16);

                // Convierte el número decimal a octal
                const octal = decimal.toString(8);

                return octal;
            }


            // Pasar de octal a decimal. 
            function octalToDecimal(octal) {
                const decimal = parseInt(octal, 8);
                return decimal;
            }

            // pasar de octal a hexadecimal
            function octalToHexadecimal(octal) {
                // Convierte el número octal a decimal
                const decimal = parseInt(octal, 8);

                // Convierte el número decimal a hexadecimal
                const hexadecimal = decimal.toString(16).toUpperCase();

                return hexadecimal;
            }

            // Pasar de octal a binario
            function octalToBinary(octal) {
                let binary = '';
                for (let i = 0; i < octal.length; i++) {
                    const decimal = parseInt(octal.charAt(i), 8);
                    const binaryChunk = decimal.toString(2).padStart(3, '0');
                    binary += binaryChunk;
                }
                // Eliminar ceros no significativos a la izquierda
                binary = binary.replace(/^0+/, '');
                return binary;
            }

            // Esta función se encarga de actualizar los campos de entrada y salida en la interfaz gráfica de usuario. 
            function updateFields() {
                let textInput = $("#text-input").val();
                let binaryInput = $("#binary-input").val();
                let hexInput = $("#hex-input").val();
                let octInput = $("#oct-input").val();

                // Si se escribe un número decimal
                if (textInput) {
                    $("#binary-input").val(decimalToBinary(textInput));
                    $("#hex-input").val(decimalToHex(textInput));
                    $("#oct-input").val(decimalToOctal(textInput));
                }

                // Si se escribe un número binario
                if (binaryInput) {
                    $("#text-input").val(binaryToDecimal(binaryInput));
                    $("#hex-input").val(binaryToHex(binaryInput));
                    $("#oct-input").val(binaryToOctal(binaryInput));
                }

                // Si se escribe un número hexadecimal
                if (hexInput) {
                    $("#text-input").val(hexToDecimal(hexInput));
                    $("#binary-input").val(hexToBinary(hexInput));
                    $("#oct-input").val(hexToOctal(hexInput));
                }
                
                // Si se escribe un número octal
                if (octInput) {
                    $("#text-input").val(octalToDecimal(octInput));
                    $("#binary-input").val(octalToBinary(octInput));
                    $("#hex-input").val(octalToHexadecimal(octInput));
                }
            }

            // Actualizar los campos de entrada y salida cuando se hace clic en un botón de conversión
            // Evento clic para botón "Decimal a binario"
            $("#to-binary-btn").click(function() {
                let text = $("#text-input").val();
                let binary = decimalToBinary(text);
                $("#binary-input").val(binary);
            });

            // Evento clic para botón "Decimal a hexadecimal"
            $("#to-hex-btn").click(function() {
                let text = $("#text-input").val();
                let hex = decimalToHex(text);
                $("#hex-input").val(hex);
            });

            // Evento clic para botón "Decimal a octal"
            $("#from-text-oct-btn").click(function() {
                let text = $("#text-input").val();
                let octal = decimalToOctal(text);
                $("#oct-input").val(octal);
            });

            // Evento clic para botón "Binario a decimal"
            $("#to-text-btn").click(function() {
                let binary = $("#binary-input").val();
                let text = binaryToDecimal(binary);
                $("#text-input").val(text);
            });

            // Evento clic para botón "Binario a hexadecimal"
            $("#from-binary-btn").click(function() {
                let binary = $("#binary-input").val();
                let hex = binaryToHex(binary);
                $("#hex-input").val(hex);
            });

            // Evento clic para botón "Binario a octal"
            $("#from-oct-binary-btn").click(function() {
                let binary = $("#binary-input").val();
                let octal = binaryToOctal(binary);
                $("#oct-input").val(octal);
            });

            // Evento clic para botón "Hexadecimal a decimal"
            $("#from-hex-btn").click(function() {
                let hex = $("#hex-input").val();
                let text = hexToDecimal(hex);
                $("#text-input").val(text);
            });

            // Evento clic para botón "Hexadecimal a binario"
            $("#from-text-btn").click(function() {
                let hex = $("#hex-input").val();
                let binary = hexToBinary(hex);
                $("#binary-input").val(binary);
            });

            // Evento clic para botón "Hexadecimal a octal"
            $("#from-oct-btn").click(function() {
                let hex = $("#hex-input").val();
                let octal = hexToOctal(hex);
                $("#oct-input").val(octal);
            });

            // Evento clic para botón "Octal a decimal"
            $("#from-oct-text-btn").click(function() {
                let octal = $("#oct-input").val();
                let text = octalToDecimal(octal);
                $("#text-input").val(text);
            });

            // Evento clic para botón "Octal a binario"
            $("#from-oct-bin-btn").click(function() {
                let octal = $("#oct-input").val();
                let binary = octalToBinary(octal);
                $("#binary-input").val(binary);
            });

            // Evento clic para botón "Octal a hexadecimal"
            $("#from-oct-hex-btn").click(function() {
                let octal = $("#oct-input").val();
                let hex = octalToHexadecimal(octal);
                $("#hex-input").val(hex);
            });

            // Esta función se encarga de borrar los campos
            function limpiar() {
                // Obtener los elementos de texto por su ID y borrar su contenido
                $('#text-input').val('');
                $('#binary-input').val('');
                $('#hex-input').val('');
                $('#oct-input').val('');
            }

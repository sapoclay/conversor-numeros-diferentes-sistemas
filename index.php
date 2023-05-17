<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Conversor de Decimal - Binario - Octal - Hexadecimal</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.metroui.org.ua/v4/css/metro-all.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.metroui.org.ua/v4.3.2/js/metro.min.js"></script>
</head>

<body>
    <!-- Campos -->
    <div class="container">
        <div class="titulo" aria-label="Conversor de Decimal, Binario, Octal y Hexadecimal"></div>
        <hr />
        <div class="row">
            <div class="cell-md-4">
                <label for="text-input">Decimal</label>
                <input type="text" id="text-input">
                <p>
                    <button id="to-binary-btn" class="button">Decimal a Binario</button>
                    <button id="to-hex-btn" class="button">Decimal a Hexadecimal</button>
                    <button id="from-text-oct-btn" class="button">Decimal a Octal</button>
                </p>
            </div>
            <div class="cell-md-4">
                <label for="binary-input">Binario</label>
                <input type="text" id="binary-input">
                <p>
                    <button id="to-text-btn" class="button">Binario a Decimal</button>
                    <button id="from-binary-btn" class="button">Binario a Hexadecimal</button>
                    <button id="from-oct-binary-btn" class="button">Binario a Octal</button>
                </p>
            </div>
        </div>
        <div class="row">
            <div class="cell-md-4">
                <label for="hex-input">Hexadecimal</label>
                <input type="text" id="hex-input">
                <p>
                    <button id="from-hex-btn" class="button">Hexadecimal a Decimal</button>
                    <button id="from-text-btn" class="button">Hexadecimal a Binario</button>
                    <button id="from-oct-btn" class="button">Hexadecimal a Octal</button>
                </p>
            </div>
            <div class="cell-md-4">
                <label for="Oct-input">Octal</label>
                <input type="text" id="oct-input">
                <p>
                    <button id="from-oct-text-btn" class="button">Octal a Decimal</button>
                    <button id="from-oct-bin-btn" class="button">Octal a Binario</button>
                    <button id="from-oct-hex-btn" class="button">Octal a Hexadecimal</button>
                </p>
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="cell">
                <button onclick="limpiar()" title="Limpiar todo">Limpiar Todo</button>
            </div>
        </div>
    </div>
    <script src="./script.js"> </script>
</body>

</html>
module com.example.backendtest {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.example.backendtest to javafx.fxml;
    exports com.example.backendtest;
}
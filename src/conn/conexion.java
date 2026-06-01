
package conn;


import java.sql.Connection;
import java.sql.SQLException;
import java.sql.DriverManager;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.FileSystems;
import java.util.Properties;

public class conexion {

    Connection conn;
    String hostname, port, database, username, password, driver, connectionString;
    InputStream in = null;

    public conexion() {
        try {
            in = Files.newInputStream(FileSystems.getDefault().getPath("C:\\Users\\isaca\\OneDrive\\Documents\\NetBeansProjects\\Repasoconlospibes\\src\\Propiedades\\propiedades.properties"));
            Properties props = new Properties();
            props.load(in);
            hostname = props.getProperty("hostname");
            port = props.getProperty("port");
            database = props.getProperty("database");
            username = props.getProperty("username");
            password = props.getProperty("password");
            driver = props.getProperty("driver");
        } catch (IOException e) {
        } finally {
            try {
                if (in != null) {
                    in.close();
                }
            } catch (IOException e) {
            }
        }
    }

    public Connection getConnection() throws SQLException {
        try {
            connectionString = "jdbc:postgresql://" + hostname + ":" + port + "/" + database;
            conn = DriverManager.getConnection(connectionString, username, password);
            return conn;
        } catch (SQLException e) {
            throw new SQLException("Error al establecer la conexion: " + e.getMessage());
        }
    }

}

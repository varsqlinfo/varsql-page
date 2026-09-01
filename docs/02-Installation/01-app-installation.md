---
sidebar_position: 2
---

# Installation and Start

1. Download the varsql-\[latest_version].zip file from [Releases](https://github.com/varsqlinfo/varsql/releases/latest)

2. Extract the zip file.

3. Move to the `[extracted folder]/varsql-app-[latest version]/bin` folder.

4. If the Java version installed by default on your local system is not compatible with the Java version required by varsql, download and install a new Java version, then configure the path.
   If you want to use the default Java, proceed to step 5.

- For Windows

```c
Open the setenv.bat file and remove the comment (`rem`).
Set the JAVA_HOME path.
```

- For Linux

```c
Open the setenv.sh file and remove the comment (`#`).
Set the JAVA_HOME path.
```

5. Start

- For Windows

```c
startup.bat <-- Click
```

- For Linux

```c
./startup.sh
```

6. Open the browser

Open the browser at http://localhost:12312/varsql

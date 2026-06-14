
This is a KWin script that repositions the on-screen display that pops up when changing volume/brightness.

For those who get annoyed by how close to the center of the screen the OSD is.

<ins>**With this script:**</ins>

<img width="2560" height="1440" alt="with" src="https://github.com/user-attachments/assets/e5fa33c0-01da-45e2-82f4-d1156156526d" />

------------

<ins>**KDE default without this script:**</ins>

<img width="2560" height="1440" alt="without" src="https://github.com/user-attachments/assets/c381d300-5efe-4918-abec-8c4db6f905a5" />

------------

<ins>**Installation:**</ins>

**GUI:**
1. Download the .kwinscript file from the **Releases** page
2. Navigate to **System Settings -> Window Management -> KWin Scripts**
3. Check the box next to **Reposition OSD** and select **Apply**

**Terminal:**
1. Download and extract the the .zip or .tar.gz
3. Run the following commands in your terminal:

     >kpackagetool6 -t KWin/Script -i ~/Downloads/reposition-osd-kde
     >
     >kwriteconfig6 --file kwinrc --group Plugins --key reposition-osd-kdeEnabled true
     >
     >qdbus org.kde.KWin /KWin reconfigure

------------

<ins>**Customization:**</ins>

 - If the position I chose is too low for your liking then you can change it by editing the following value in _**main.js**_

    <img width="698" height="370" alt="scale" src="https://github.com/user-attachments/assets/94d8c242-679a-4125-b326-4109bb99ad3c" />

    >It is set to 0.9 by default but it can be set to any value between 0 and 1. Setting it closer to 1 will move the OSD closer to the bottom of your screen.
 - **Important:** If you already had the script installed before you made changes you will have to run the following commands:
    >kpackagetool6 -t KWin/Script -u ~/Downloads/reposition-osd-kde
    >
    >kwriteconfig6 --file kwinrc --group Plugins --key reposition-osd-kdeEnabled true
    >
    >qdbus org.kde.KWin /KWin reconfigure

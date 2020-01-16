# Project Overview
This is a simple web app to download / process audio files to add proper metadata to a single or multiple files at once. This project makes use of a large open source music encyclopedia, [MusicBrainz][MB], which provides music metadata to the public for free. Consider donating to them [here](https://metabrainz.org/donate).

## Project setup
The only pre-configuration needed is to change the desired port in the `.env` file and configure the database connection information. You can optionally change which folders are used to process files. Once the configuration is done, just run your standard node setup commands:

```bash
npm install
npm start
```

## Project internals
Files are stored in the `$INPUT` folder (by default, `./input/`) to be processed. For now, only `.mp3` files are selected from that folder to be listed. Once processed, files are moved to the `$OUTPUT` folder (by default, `./output/`). Only files in the `$INPUT` folder show up in the "Input" screen of the project, and only files in the `$OUTPUT` folder show up in the "Output" screen of the project. All `.mp3` files in the `$INPUT` folder are added to a database and given a GUID, and files are referenced through this GUID to ensure the internal filesystem structure is never visible outside the application.

[MB]: https://musicbrainz.org/

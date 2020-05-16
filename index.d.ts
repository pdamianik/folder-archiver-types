/*
    Provides interfaces necessary to create a custom archive type for the vscode extension https://github.com/pdamianik/folder-archiver.git
    Copyright (C) 2020 pdamianik

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

export interface ArchiveTypeLocales{
    /**
     * The name of the Archive Type
     * example: '.zip': 'ZIP'
     */
    name:string;
    /**
     * The verb that will be shown to indicate that the extension currently archives a folder
     * example: '.zip': 'zipping'
     */
    inProgressVerb:string;
    /**
     * The typle of the file type
     * example: '.zip': 'ZIP folder'
     */
    fileTypeTitle:string;
}

export interface ArchiveType{
    /**
     * The possible extensions for the archive file
     */
    archive_extension_types: string[];
    /**
     * @see ArchiveTypeLocales
     */
    archive_locales: ArchiveTypeLocales;

    /**
     * Generates a new instance of this archive type
     */
    
    newInstance() : ArchiveType;

    /**
     * Adds a folder to the archive
     * @param path The path of the folder relative to the archive's root (example: src/main/)
     */

    addFolder(path : string): Promise<void>;

    /**
     * Adds a file to the archive
     * @param path The path of the file relative to the archive's root 
     * @param fileData The content of the file
     */

    addFile(path : string, fileData : Uint8Array) : Promise<void>;

    /**
     * Returns the archive in a form that is ready to be written to the disk
     */

    getArchive() : Promise<Uint8Array>;
}
import os
from pathlib import Path

def lowercase_extensions(directory):
    """
    Rename all files in the given directory to have lowercase extensions.
    
    Args:
        directory (str): Path to the directory containing the files
    """
    # Convert directory to Path object
    dir_path = Path(directory)
    
    # Ensure directory exists
    if not dir_path.exists() or not dir_path.is_dir():
        raise ValueError(f"Directory '{directory}' does not exist or is not a directory")
    
    # Counter for renamed files
    renamed_count = 0
    
    # Iterate through all files in directory
    for file_path in dir_path.iterdir():
        if file_path.is_file():
            # Get the current name and extension
            stem = file_path.stem
            extension = file_path.suffix
            
            # Check if extension has any uppercase letters
            if extension.lower() != extension:
                # Create new name with lowercase extension
                new_name = stem + extension.lower()
                new_path = file_path.with_name(new_name)
                
                try:
                    # Rename the file
                    file_path.rename(new_path)
                    print(f"Renamed: {file_path.name} -> {new_name}")
                    renamed_count += 1
                except Exception as e:
                    print(f"Error renaming {file_path.name}: {str(e)}")
    
    print(f"\nProcess completed. {renamed_count} files renamed.")

if __name__ == "__main__":
    # Get the current directory
    current_dir = os.getcwd()
    
    try:
        lowercase_extensions(current_dir)
    except Exception as e:
        print(f"Error: {str(e)}")
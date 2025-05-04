import os
import requests
import zipfile
from pathlib import Path
import gdown
import shutil

class ModelLoader:
    """Helper class to manage model downloading and caching"""
    
    def __init__(self, model_dir="model", cache_dir=".model_cache"):
        # Base directory = location of this script file
        self.base_dir = Path(__file__).resolve().parent

        # Resolve paths relative to this file's location
        self.model_dir = Path(model_dir) if model_dir else self.base_dir / "model"
        self.cache_dir = Path(cache_dir) if cache_dir else self.base_dir / ".model_cache"

        self.model_files = {
            "tokenizer_dir": self.model_dir / "saved_tokenizer",
            "model_weights": self.model_dir / "model_weights.pth"
        }
        
    def is_model_available(self):
        """Check if all required model files exist locally"""
        if not self.model_dir.exists():
            return False
            
        # Check if tokenizer directory exists and is not empty
        if not self.model_files["tokenizer_dir"].exists() or not list(self.model_files["tokenizer_dir"].glob("*")):
            return False
            
        # Check if model weights exist
        if not self.model_files["model_weights"].exists():
            return False
            
        return True
        
    def download_model(self, drive_id):
        """Download model zip from Google Drive"""
        # Create cache directory if it doesn't exist
        self.cache_dir.mkdir(exist_ok=True, parents=True)
        
        # Path for downloaded zip file
        zip_path = self.cache_dir / "model.zip"
        
        print(f"Downloading model from Google Drive (ID: {drive_id})...")
        
        # Use gdown to download from Google Drive
        gdown.download(id=drive_id, output=str(zip_path), quiet=False)
        
        if not zip_path.exists():
            raise FileNotFoundError("Failed to download model zip file")
            
        return zip_path
        
    def extract_model(self, zip_path):
        """Extract the model zip file to the model directory"""
        print(f"Extracting model files to {self.model_dir}...")
        
        # Create model directory if it doesn't exist
        self.model_dir.mkdir(exist_ok=True, parents=True)
        
        # Extract the zip file
        with zipfile.ZipFile(zip_path, 'r') as zip_ref:
            zip_ref.extractall(self.model_dir)
            
        print("Model files extracted successfully")
        
    def cleanup_cache(self, keep_zip=False):
        """Clean up the cache directory after successful extraction"""
        if not keep_zip and self.cache_dir.exists():
            zip_path = self.cache_dir / "model.zip"
            if zip_path.exists():
                zip_path.unlink()
                
    def ensure_model_available(self, drive_id):
        """Main method to ensure model is available, downloading if necessary"""
        if self.is_model_available():
            print("Model files already available locally")
            return True
            
        try:
            # Download the model zip
            zip_path = self.download_model(drive_id)
            
            # Extract the model files
            self.extract_model(zip_path)
            
            # Verify files are now available
            if not self.is_model_available():
                raise RuntimeError("Model files not found after extraction")
                
            # Clean up
            self.cleanup_cache()
            
            return True
        except Exception as e:
            print(f"Error ensuring model availability: {e}")
            return False
"use client";

import { Pencil } from "lucide-react";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRef, useState } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const UpdateUser = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const formRef = useRef(null);

  const handleUrlChange = (e) => {
    const url = e.target.value.trim();
    setImageUrl(url);
    setPreviewUrl(url);
  };

  const handleImageError = () => {
    setPreviewUrl("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim();

    try {
      const { error } = await authClient.updateUser({
        name: name || undefined,
        image: imageUrl || undefined,
      });

      if (error) {
        alert("Failed to update profile!");
        console.error(error);
        return;
      }

      alert("Profile updated successfully!");

      // reset
      setImageUrl("");
      setPreviewUrl("");
      e.target.reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal>
      {/* Trigger */}
      <Modal.Trigger asChild>
        <Button className="rounded-2xl bg-linear-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
          <Pencil size={16} />
          Edit Profile
        </Button>
      </Modal.Trigger>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Pencil className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Profile</Modal.Heading>
              <p className="mt-1.5 text-sm text-muted">
                Update your name and profile picture URL
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                {/* IMPORTANT: real form ref instead of querySelector */}
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  {/* Image URL */}
                  <div className="flex flex-col gap-2">
                    <Label>Profile Image URL</Label>
                    <Input
                      type="url"
                      placeholder="https://example.com/image.jpg"
                      value={imageUrl}
                      onChange={handleUrlChange}
                    />
                    <p className="text-xs text-muted">
                      Paste a direct image link
                    </p>
                  </div>

                  {/* Preview */}
                  {previewUrl && (
                    <div className="flex justify-center">
                      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <Image
                          src={previewUrl}
                          alt="Profile Preview"
                          width={112}
                          height={112}
                          className="object-cover w-full h-full"
                          onError={handleImageError}
                        />
                      </div>
                    </div>
                  )}

                  {/* Name */}
                  <TextField name="name">
                    <Label>Full Name</Label>
                    <Input placeholder="Enter your full name" />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>

            <Modal.Footer>
              <Button slot="close" variant="secondary" disabled={loading}>
                Cancel
              </Button>

              {/* Proper submit button (NO DOM querySelector) */}
              <Button
                onClick={() => formRef.current?.requestSubmit()}
                isLoading={loading}
                disabled={loading}
                className="flex items-center gap-2"
              >
                <Pencil size={16} />
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateUser;
